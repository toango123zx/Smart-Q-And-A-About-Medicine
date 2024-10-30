// utils/autoBind.ts

/**
 * Automatically binds all methods of a class instance to the instance itself.
 * This is useful for ensuring that `this` refers to the correct instance,
 * especially when using methods as callbacks.
 * 
 * @param instance The class instance whose methods will be bound.
 */
export function autoBind(instance: any) {
    // Get the prototype of the instance
    const prototype = Object.getPrototypeOf(instance);
  
    // Loop over each property in the prototype
    Object.getOwnPropertyNames(prototype).forEach((name) => {
      const property = instance[name];
      // Check if the property is a method and not the constructor
      if (name !== 'constructor' && typeof property === 'function') {
        // Bind the method to the instance
        instance[name] = property.bind(instance);
      }
    });
  }
  