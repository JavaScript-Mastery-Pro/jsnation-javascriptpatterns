### Comparison

Both approaches achieve the same functionality, but they differ in terms of code organization and design patterns.

1.  **First Approach (Using Functions and Global Variables):**

    - This approach uses functional programming style. Middleware functions like `isAuthenticated` are defined globally and reused across routes.
    - Session middleware and its configuration are directly instantiated and used.
    - The session store is instantiated directly within the main script.

    > The code is straightforward and easy to understand

    > With this approach, the memory client or any session client you'll use (e.g. Redis client and session store) will be initialized as soon as the module is loaded, which is eager initialization

    > In a large application, different modules might inadvertently create multiple instances if they don't share the same module correctly

2.  **Second Approach (Using a Class for Session Management):**

    - This approach utilizes object-oriented programming (OOP) principles. The session management logic is encapsulated within a class (`SessionManager`).
    - The class provides a cleaner way to manage session-related functionality by encapsulating it within a single module.
    - Pros:
      - Encapsulation: .
      - Modularity: The session management logic is modularized, making it easier to maintain and test.
    - Cons:
      - Complexity: Introducing a class adds some complexity compared to the straightforward functional approach.
      - Overhead: While the class-based approach provides better organization, it might introduce unnecessary overhead for smaller applications.

    > Session-related logic is encapsulated within a class, leading to cleaner code and separation of concerns.
    >
    > Imagine you have a toy car. Now, encapsulation is like putting that toy car in a box with a lid on it. The car is still there, you can play with it, but you can't see all the gears, wires, and motors inside.
    >
    > So, when we talk about encapsulation in programming, we mean keeping things together in an organized way, so they're easier to understand and use. It's like packing your things in a suitcase when you're traveling - everything you need is in one place and you don't have to dig through everything to find it.

### Which is Better?

- The choice between these approaches depends on factors like project size, team preferences, and scalability requirements.
- For smaller projects or when simplicity is prioritized, the first approach might be sufficient.
- For larger projects or when modularity and encapsulation are crucial, the second approach using a class for session management provides better organization and maintainability.

Overall, both approaches are valid, and the choice should be made based on the specific needs and constraints of the project.
