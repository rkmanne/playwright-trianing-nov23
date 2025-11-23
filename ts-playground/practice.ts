 interface User {
    id: number;
    name: string;
    role: "admin" | "user";
}

function canAccessAdminPage(user: User): boolean {
    return user.role === "admin";
}

function main(): void {
    const alice: User = { id: 1, name: "Alice", role: "admin" };
    const bob: User = { id: 2, name: "Bob", role: "user" };

    console.log(`${alice.name} can access admin: ${canAccessAdminPage(alice)}`);
    console.log(`${bob.name} can access admin: ${canAccessAdminPage(bob)}`);
}

main();