import { StateStore } from '@depthlabs/nestjs-state-machine';
import { Injectable } from '@nestjs/common';
import { PROJECT_GRAPH, ProjectState } from './constants';

@Injectable()
export class Project {
  name: string;

  @StateStore(PROJECT_GRAPH)
  state: string = ProjectState.NEW;
}
