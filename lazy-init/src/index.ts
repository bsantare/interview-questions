let someExpensivelyCalculatedValue: string;

const sleep = async (timeMs: number) => {
    await new Promise((resolve) => setTimeout(() => {
        resolve(undefined)
    }, timeMs))
}

/**
 * This function lazily initializes (caches) an expensive value to calculate.  The provided implementation is not
 * concurrency-safe in the sense that concurrent calls to `calculateOrGetExpensiveValue` will cause the
 * expensive value to be recalculated.
 *
 * Modify this code so that the expensive value is only calculated once regardless of how many concurrent
 * async calls are made to this function.
 *
 * The accompanying test case should be implemented first to 1) prove there is an issue and 2) after changes,
 * prove that a workable solution has been implemented
 */
export const calculateOrGetExpensiveValue = async () => {
    if (!someExpensivelyCalculatedValue) {
        console.info('Cache miss - calculating expensive value');
        someExpensivelyCalculatedValue = await doSomethingExpensive();
    }
    return someExpensivelyCalculatedValue;
}

export const doSomethingExpensive = async (): Promise<string> => {
    const expensiveValue = new Date(Date.now() + Math.random() * 5000).toISOString();
    await sleep(1000);
    return expensiveValue;
}