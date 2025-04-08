import { OrgMember, OrgMemberDTO } from "./org-member.entity"
import { OrgBranchMember, OrgBranchMemberDTO } from "./org-branch-member.entity"
import { OrgBranch, OrgBranchDTO } from "./org-branch.entity"
import { Org, OrgDTO } from "./org.entity"

export const Entities = [
    OrgBranchMember,
    OrgBranch,
    OrgMember,
    Org
]

export const DTOs = [
    OrgBranchMemberDTO,
    OrgBranchDTO,
    OrgMemberDTO,
    OrgDTO
]