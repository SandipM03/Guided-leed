import { ModalInterface } from '@/interface/ModalInterface'
import { ValidModel } from '@/constants/valid_modals'

import { OpenAI_3_5_turbo } from '@/modals/modal/OpenAI_3_5_turbo'
import { Gemini_2_5_Flash } from './modal/Gemini_2_5_Flash'
import { OpenAi_4o } from './modal/OpenAI_40'

/**

 * @type {Record<ValidModel, ModalInterface>}
 */
export const modals: Record<ValidModel, ModalInterface> = {
  'openai_3.5_turbo': new OpenAI_3_5_turbo(),
  openai_4o: new OpenAi_4o(),
  'gemini_2.5_Flash': new Gemini_2_5_Flash(),
}
