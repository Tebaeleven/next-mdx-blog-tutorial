import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Pagination({ currentPage, totalPages }) {
    const router = useRouter()
    return (
        <>
            <p>
                ページ：{currentPage} / {totalPages}
            </p>
            {currentPage > 1 && (
                <Link href={`/?page=${currentPage - 1}`} >
                    戻る
                </Link>
            )}
            {currentPage < totalPages && (
                <Link href={`/?page=${currentPage + 1}`}>
                    進む
                </Link>
            )}
        </>
    )
}

export default Pagination