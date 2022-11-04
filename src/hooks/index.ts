import React, { useEffect, useMemo, useState } from "react";

function useFetch<T, U>(
    fetchFunc: () => Promise<T>
): {
    data: T | null;
    isLoading: boolean;
    isError: boolean;
    error: U | null;
} {
    const [shouldRefetch, setShouldRefetch] = useState(false);
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState<U | null>(null);

    console.log("yes");

    const fetch = useMemo(
        () =>
            function () {
                setIsLoading(true);
                fetchFunc()
                    .then((value) => {
                        setData(value);
                        setIsError(false);
                    })
                    .catch((error) => {
                        setError(error);
                        setIsError(true);
                    })
                    .finally(() => setIsLoading(false));
                setShouldRefetch(false);
            },
        []
    );

    useEffect(() => {
        console.log("fetch");

        fetch();
    }, [fetch]);

    useEffect(() => {
        if (shouldRefetch) fetch();
    }, [shouldRefetch, fetch]);

    return {
        data,
        isLoading,
        isError,
        error,
    };
}

export { useFetch };
