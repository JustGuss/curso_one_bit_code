import {inline} from './inline.js';
//É possível alterar o nome da function importada utilizando "inline as i" por exemplo.

import defaultInlineRenomeado from './inline.js';
//Há apenas um export default e você pode nomea-lo como preferir.

import { group } from './non-inline.js'
import exportDefault from './non-inline.js'

inline();
defaultInlineRenomeado();

group();
exportDefault();
//Os códigos export são avaliados de forma independente e podem ser declarados antes das funções no começo do arquivo.