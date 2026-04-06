import * as migration_20260406_112205 from './20260406_112205';

export const migrations = [
  {
    up: migration_20260406_112205.up,
    down: migration_20260406_112205.down,
    name: '20260406_112205'
  },
];
