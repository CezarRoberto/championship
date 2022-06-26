type ICreateChampionOnGameEnumDTO = {
    id?: string;
    game_id: string;
    championship_id: string;
    winner?: string;
};

type ICreateChampionOnGameDTO = Array<ICreateChampionOnGameEnumDTO>;

export { ICreateChampionOnGameDTO };
