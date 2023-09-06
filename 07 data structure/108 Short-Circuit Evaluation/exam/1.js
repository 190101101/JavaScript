console.log(1 || false);
console.log(false || 1);
console.log(false || true);
console.log(false || undefined);
console.log(undefined || false || true);
console.log(undefined || false);
console.log(undefined && false);
console.log(undefined && 'string');
console.log(new String && new Map);