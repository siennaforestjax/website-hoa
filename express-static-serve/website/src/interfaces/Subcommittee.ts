import CommitteeMember from "./CommitteeMember";

export default interface Subcommittee {
    name: string;
    description: string;
    objectives: Array<string>;
    representatives: Array<CommitteeMember>;
}