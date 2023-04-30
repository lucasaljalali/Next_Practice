export interface IPokemon {
  abilities: [{
    ability: {
      name: string;
      url: string;
    },
    is_hidden: boolean;
    slot: number;
  }];
  base_expirience: number;
  forms: [
    {
      name: string;
      url: string;
    }
  ];
  game_indices: [
    {
      game_index: number;
      version: {
        name: string;
        url: string;
      }
    }
  ];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
   front_default: string;
   front_female: string;
   front_shiny: string;
   front_shiny_female: string;
  };
  stats: [{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }];
  types: [{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }];
  weight: number;
  }
  
  export interface IPokemonList {
    count: number;
    next: string;
    previous: string | null;
    results: Pokemon[];
  }
  