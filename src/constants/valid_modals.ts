/**
 * List of valid models that can be used in the application.
 */
export const VALID_MODELS = [
  {
    model: 'gpt-3.5-turbo',
    name: 'openai_3.5_turbo',
    display: 'GPT-3.5 Turbo',
  },
  {
    model: 'gpt-4o',
    name: 'openai_4o',
    display: 'GPT-4 Optimized',
  },
  {
    
    model: 'gemini-2.5-flash',
    name: 'gemini_2.5_Flash',
    display: 'Gemini 2.5 Flash',
  },
]

/**
 * Type of valid models that can be used in the application.
 */
export type ValidModel = 'openai_3.5_turbo' | 'openai_4o' | 'gemini_2.5_Flash'
