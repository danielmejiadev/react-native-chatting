// Dependencies
import { UserCredentials } from '../../auth/dto/authentication';

/**
 * User informartion for register.
 * @interface UserCreate
 * @author Daniel Mejia
 */
export interface UserCreate extends UserCredentials {
  email?: string;
  fullName?: string;
  phone?: string;
  website?: string;
  tagList?: Array<string>;
  customData?: string;
}
