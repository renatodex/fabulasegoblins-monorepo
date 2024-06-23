import { fn } from '@storybook/test';
import Spell from './index.jsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Spell/Spell',
  component: Spell,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    spell: {
      "id": 364,
      "book_url": null,
      "cast_distance": null,
      "cast_distance_number": null,
      "duration_time": null,
      "duration_time_number": null,
      "icon": "GiSonicShout",
      "long_description": "<p>Use a qualquer momento durante o seu turno no lugar de uma <b>ação de ataque</b>.</p><p>As unidades em volta do Qatuniano <b>não podem bloquear</b> o impulso sônico.</p><p>Todas as unidades são empurradas na <b>direção oposta</b> ao personagem sem receber dano, mesmo que sejam empurradas contra um obstáculo. (a intensidade do impulso não é grande o suficiente para causar dano)</p><p><b>Unidades grandes</b> também podem ser empurradas pela onda, mas unidades <b>Enormes ou maiores</b> não são afetadas pelo efeito do impulso.</p><p>No <b>Grau 3</b>, este poder se auto-aprimora, passando a afetar criaturas Enormes.</p><p>No <b>Grau 4</b>, este poder se auto-aprimora novamente, aumentando incrívelmente sua intensidade, e passando a afetar criaturas de categoria Titã.</p>",
      "magic_cost": "3 P.M",
      "magic_cost_number": 3,
      "permalink": "open_space",
      "range_amount": "3x3",
      "sacrifice": false,
      "short_description": "Conjura um impulso sônico em volta de si que empurra todos alvos adjacentes em até 3 espaços.",
      "tags": "grimo,qatun",
      "filter_tags": "insignia-de-qatun",
      "tier": 1,
      "title": "Abrir Espaço",
      "ultimate": false,
      "created_at": "2024-06-15T06:10:26.105Z",
      "updated_at": "2024-06-15T06:10:26.105Z",
      "action_type_id": 1,
      "attack_logic_id": 2,
      "element_id": 13,
      "external_id": "open_space",
      "range_type": {
      "id": 5,
      "title": "Circular",
      "short_description": "O conjurador casta o feitiço a partir dele mesmo e afeta todas as unidades num angulo de 360o a partir dele.",
      "long_description": "O conjurador casta o feitiço a partir dele mesmo e afeta todas as unidades num angulo de 360o a partir dele.",
      "permalink": "circular"
      },
    },
  },
};
