# JavaScript Numbers

It's common in other languages to define different types of numbers such as short, long, floating-point, integers however JavaScript does NOT define different types of numbers.

- Different number types not defined
- Numbers always stored as double precision floating point numbers
- Stored as 64 bit
  - the number is stored in bits 0 to 51
  - the exponent is stored in bits 52 - 62
  - the sign is stored in bit 63

# Precision

- Numbers without a period or exponent notation are accurate up to **15** digits
- Maximum number of decimals is **17**
  - Note: floating point arithmetic in JavaScript is NOT always 100 % accurate
  - It helps to multiple or divide floating point numbers by 10
    - .05 _ 10 + .04 _ 10 / 10 // 0.09

Good article on how to compare numbers correctly in JavaScript [Article](https://dev.to/alldanielscott/how-to-compare-numbers-correctly-in-javascript-1l4i)
