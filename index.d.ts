import { Pattern } from "fast-glob";
interface SplitterOptions {
  url?: string;
  project?: string;
  token?: string;
  email?: string;
  password?: string;
}

type Spec = {
  file: string;
  estimatedDuration: number;
  passed: boolean;
  start: number;
  end: number;
};

type Session = {
  id: string;
  start: number;
  end: number;
  backlog: Spec[];
};

type Project = {
  projectName: string;
  latestSession: string;
  sessions: Session[];
};

type AddSessionResponse = {
  projectName: string;
  sessionId: string;
};

type SpecInput = {
  filePath: string;
};

type NextSpecOptions = {
  sessionId?: string;
  machineId?: string;
  isPassed?: boolean;
};

export class SpecSplitClient {
  readonly options: SplitterOptions;

  constructor(options?: SplitterOptions);

  project(name?: string): Project;
  nextSpec(options?: NextSpecOptions): string;
  addSession(specs: SpecInput[], projectName?: string): AddSessionResponse;
}

export function filesToSpecInput(
  includes: Pattern[],
  exludes: Pattern[]
): SpecInput[];
