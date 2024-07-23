import { useState, useEffect, useRef } from 'react';

const useInfiniteScroll = (loadMoreData) => {
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const containerRef = useRef(null);
    const isFetching = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return; // containerRef.current가 null일 경우 종료

            const { scrollTop, scrollHeight, clientHeight } = container;

            if (
                scrollHeight > clientHeight &&
                scrollTop + clientHeight >= scrollHeight - 10
            ) {
                if (!isFetching.current && hasMore) {
                    isFetching.current = true;
                    loadMoreData(page).then((moreDataAvailable) => {
                        setPage((prevPage) => prevPage + 1);
                        setHasMore(moreDataAvailable);
                        isFetching.current = false;
                    });
                }
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [page, hasMore, loadMoreData]);

    return { containerRef, hasMore };
};

export default useInfiniteScroll;
