export declare namespace getRandom {
   interface getRandomImage {
      (): () => string;
   }
   interface getRandomNumber {
      (): (max: number) => number;
   }
   interface getRandomString {
      (): (max: number) => string;
   }
}
export declare function getRandomImage(): string;
export declare function getRandomNumber(max: number): number;
export declare function getRandomString(max: number): string;