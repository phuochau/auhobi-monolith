import { OrgMemberResolver } from "./org-member.resolver";
import { OrgBranchMemberResolver } from "./org-branch-member.resolver";
import { OrgBranchResolver } from "./org-branch.resolver";
import { OrgResolver } from "./org.resolver";

export const Resolvers = [
    OrgBranchMemberResolver,
    OrgBranchResolver,
    OrgMemberResolver,
    OrgResolver
]