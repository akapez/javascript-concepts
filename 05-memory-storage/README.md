### Memory Storage
JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection).

**Garbage Collection** - Garbage collection is the process of identifying and reclaiming memory that is no longer in use by the program. JavaScript engines, such as V8 (used in Chrome and Node.js)

##### Memory Life Cycle
The memory life cycle in JavaScript refers to the process by which memory is allocated, used, and then freed during the execution of a program. The memory life cycle consists of three phases.

- **Allocation**: Memory is allocated when variables, objects, or data structures are created.
- **Usage**: The allocated memory is used for operations like reading or writing to variables and objects.
- **Release**: Memory is released when it is no longer needed. This is where garbage collection comes in.

##### Primitive and Reference Data Types
- **Primitive Data Types**: Primitive data types are the most basic data types in JavaScript. They are immutable, meaning their values cannot be changed once created. stored by value directly in the stack. (Number, String, Boolean, Undefined, Null, Symbol)
- **Reference Data Types**: Reference data types, also known as objects, are more complex data structures. Unlike primitives, they are mutable, stored by reference in the heap. (Object, Array, Function)

##### Stack and Heap
JavaScript, like many programming languages, uses two main memory structures to manage the allocation and storage of data: the stack and the heap.

| Aspect          | Stack                                       | Heap                                                |
| --------------- | ------------------------------------------- | --------------------------------------------------- |
| Storage         | Primitive values, function calls            | Objects, arrays, dynamic data                       |
| Memory Size     | Fixed, limited                              | Dynamic, flexible                                   |
| Access Speed    | Fast                                        | Slower                                              |
| Management	    | Automatically managed by JavaScript engine  | Managed by JavaScript engine with garbage collection|
| Allocation Type	| Static memory allocation                    | Dynamic memory allocation                           |

![Stack and Heap](https://raw.githubusercontent.com/akapez/javascript-concepts/refs/heads/main/05-memory-storage/memory-storage.png)

The diagram illustrates how primitive values (like numbers and strings) and reference values (like objects) are handled in JavaScript. Primitive values are copied directly when assigned to variables. Reference values, on the other hand, store a memory address that points to the actual object in the heap. When you assign a reference value, you copy the memory address, not the object itself.

Further Reference: [JavaScript Under The Hood 4 - Memory Storage](https://youtu.be/Hci9Bb4_fkA?list=PL3ZPTlHmN263q0ZcI9qyqYfUKvaLqbGTt)
