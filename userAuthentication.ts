interface User {
  id: number;
  username: string;
  password: string;
  role: UserRole;
}

enum UserRole {
  Admin = "admin",
  User = "user",
}

class Authentication {
  private users: User[] = [];

  register(user: User): void {
    this.users.push(user);
    console.log(`User '${user.username}' registered successfully.`);
  }

  login(username: string, password: string): void {
    const user = this.users.find(u => u.username === username);
    if (user && user.password === password) {
      console.log(`User '${username}' logged in successfully.`);
      this.showDashboard(user);
    } else {
      console.log(`Invalid username or password.`);
    }
  }

  showDashboard(user: User): void {
    switch (user.role) {
      case UserRole.Admin:
        console.log(`Welcome, ${user.username} (Admin).`);
        // Code to display admin dashboard
        break;
      case UserRole.User:
        console.log(`Welcome, ${user.username} (User).`);
        // Code to display user dashboard
        break;
      default:
        console.log(`Unknown user role.`);
    }
  }
}

// Example usage
const auth = new Authentication();

const adminUser: User = {
  id: 1,
  username: "admin",
  password: "admin123",
  role: UserRole.Admin,
};

const regularUser: User = {
  id: 2,
  username: "user",
  password: "user123",
  role: UserRole.User,
};

auth.register(adminUser);
auth.register(regularUser);

auth.login("admin", "admin123");
auth.login("user", "user123");
auth.login("user", "invalidpassword");
