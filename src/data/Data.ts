import React from "react";
type SetLoadingFncn = (loading: boolean) => void;
type SetErrorFncn = (error: string) => void;
type SetDataFncn = (data: null) => void;

export function fetchData(
    url: string,
    setData: SetDataFncn,
    setLoading: SetLoadingFncn,
    setError: SetErrorFncn
): void {
    async function fetchFnc() {
        setLoading(true);
        setError("");
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    fetchFnc();
}
