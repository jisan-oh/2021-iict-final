function pushPop(
  target: unknown,
  propertykey: string,
  descriptor: TypedPropertyDescriptor<(...args: unknown[]) => unknown>
) {
  const original = descriptor.value;

  descriptor.value = function (...args) {
    if (original) {
      push();
      const result = original.apply(this, args);
      pop();

      return result;
    }
  };
}

export default pushPop;
