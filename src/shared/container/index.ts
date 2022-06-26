import { IChampionshipRepository } from '@modules/championship/repository/IChampionshipRepository';
import { ChampionshipRepository } from '@modules/championship/repository/implementation/ChampionshipRepository';
import { IChampionOnGameRepository } from '@modules/championship_on_game/repository/IChampionOnGameRepository';
import { ChampionshipOnGameRepository } from '@modules/championship_on_game/repository/implementation/ChampionOnGameRepository';
import { IGameRepository } from '@modules/games/repository/IGameRepository';
import { GameRepository } from '@modules/games/repository/implementation/GameRepository';
import { TeamRepository } from '@modules/team/repository/implementation/TeamRepository';
import { ITeamRepository } from '@modules/team/repository/ITeamRepository';
import { container } from 'tsyringe';

container.registerSingleton<IChampionshipRepository>(
    'ChampionshipRepository',
    ChampionshipRepository,
)

container.registerSingleton<ITeamRepository>(
    'TeamRepository',
    TeamRepository,
)

container.registerSingleton<IGameRepository>(
    'GameRepository',
    GameRepository,
)

container.registerSingleton<IChampionOnGameRepository>(
    'ChampionOnGameRepository',
    ChampionshipOnGameRepository,
)