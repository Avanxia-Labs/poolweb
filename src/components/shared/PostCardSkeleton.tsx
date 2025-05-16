// components/Desktop/PostCardSkeleton.tsx
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const PostCardSkeleton: React.FC = () => (
  <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow animate-pulse">
    <Skeleton height={160} />
    <div className="p-4 space-y-2">
      <Skeleton width={`60%`} height={24} />
      <Skeleton count={2} />
    </div>
    <div className="p-4 pt-0">
      <Skeleton width={80} height={32} style={{ borderRadius: 4 }} />
    </div>
  </div>
)
