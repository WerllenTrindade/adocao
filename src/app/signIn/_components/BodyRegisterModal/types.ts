import { z } from 'zod';
import { schemaForma } from './schema';

export type FormProps = z.infer<typeof schemaForma>;
