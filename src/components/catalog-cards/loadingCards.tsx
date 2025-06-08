import React from 'react'
import ContentLoader from 'react-content-loader';

function LoadingCards() {
    return (
        <ContentLoader
            speed={2}
            width={302.5}
            height={484}
            viewBox="0 0 302.5 484"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="0" y="0" rx="0" ry="0" width="277" height="469" />
        </ContentLoader>
    )
}

export default LoadingCards;