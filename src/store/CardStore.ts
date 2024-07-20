import  {create} from 'zustand';

type User = {
  email: string;
  password: string;
}

type UserStore = {
  user: User | null,
  addUser: (user: User) => void;
  removerUser: () => void;
}


export const useUserStore = create<UserStore>((set) =>{
  return {
    user: null,
    addUser: (user: User) => set(() => ({ user: user })),
    removerUser: (() => set(() => ({user: null})))
  }
})