import { FC } from "react"
import ContentLoader from "react-content-loader"

export const SkeletonCard: FC = () => {
    return (
        <ContentLoader viewBox="0 0 500 280" height={280} width={500} uniqueKey="skeleton-card">
            <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
            <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
            <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
            <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
        </ContentLoader>
    )
}

export const SkeletonCardCategory: FC = ({...props}) => (
    <ContentLoader
    speed={2}
    width={400}
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    uniqueKey="skeleton-card-category"
    {...props}
    >
    <rect x="35" y="10" rx="5" ry="5" width="150" height="20" />
    <rect x="35" y="45" rx="5" ry="5" width="150" height="20" />
    <rect x="35" y="80" rx="5" ry="5" width="150" height="20" />
    <rect x="35" y="115" rx="5" ry="5" width="150" height="20" />
    <rect x="1" y="5" rx="4" ry="4" width="30" height="30" />
    <rect x="1" y="40" rx="4" ry="4" width="30" height="30" />
    <rect x="1" y="75" rx="4" ry="4" width="30" height="30" />
    <rect x="1" y="110" rx="4" ry="4" width="30" height="30" />
    </ContentLoader>
)

export const AmazonLoader: FC = ({...props}) => {
    return (
      <ContentLoader uniqueKey="amazon-loader" viewBox="0 0 1600 800" height={700} width={1500} {...props}>
        <circle cx="944" cy="319" r="14" />
        <rect x="987" y="308" rx="5" ry="5" width="440" height="20" />
        <circle cx="944" cy="380" r="14" />
        <rect x="987" y="368" rx="5" ry="5" width="440" height="20" />
        <circle cx="944" cy="438" r="14" />
        <rect x="987" y="426" rx="5" ry="5" width="440" height="20" />
        <circle cx="944" cy="498" r="14" />
        <rect x="987" y="486" rx="5" ry="5" width="440" height="20" />
        <rect x="128" y="36" rx="0" ry="0" width="692" height="600" />
        <rect x="458" y="600" rx="0" ry="0" width="0" height="0" />
        <rect x="222" y="680" rx="0" ry="0" width="0" height="0" />
        <rect x="242" y="684" rx="0" ry="0" width="0" height="0" />
        <rect x="20" y="40" rx="0" ry="0" width="80" height="88" />
        <rect x="20" y="160" rx="0" ry="0" width="80" height="88" />
        <rect x="20" y="280" rx="0" ry="0" width="80" height="88" />
        <rect x="388" y="658" rx="0" ry="0" width="0" height="0" />
        <rect x="384" y="646" rx="0" ry="0" width="0" height="0" />
        <rect x="370" y="646" rx="0" ry="0" width="0" height="0" />
        <rect x="20" y="400" rx="0" ry="0" width="80" height="88" />
        <rect x="940" y="36" rx="0" ry="0" width="600" height="50" />
        <rect x="940" y="116" rx="0" ry="0" width="600" height="12" />
        <rect x="940" y="136" rx="0" ry="0" width="600" height="12" />
        <rect x="940" y="156" rx="0" ry="0" width="600" height="12" />
        <rect x="1596" y="270" rx="0" ry="0" width="0" height="0" />
        <rect x="1462" y="264" rx="0" ry="0" width="0" height="0" />
        <rect x="940" y="198" rx="0" ry="0" width="140" height="60" />
        <rect x="1120" y="198" rx="0" ry="0" width="140" height="60" />
      </ContentLoader>
    )
}
