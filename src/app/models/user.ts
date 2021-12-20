export interface User {
    name: string;
    id: string;
    username: string;
    school: string;
    year: string;
    role: string;
    pronouns: string;
    majors?: string[];
    interests?: string[];
    bio?: string;
    todos?: string[];
}