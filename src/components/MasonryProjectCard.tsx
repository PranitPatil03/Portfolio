'use client';

import { Project } from '@/types/project'
import Link from "next/link";
import Image from "next/image";
import Video from "next-video";
import { useState } from 'react';
import donezovideo from '/videos/donezo.mp4';
import mindMentorVideo from '/videos/mind-mentor.mp4';
import satyaCheckVideo from '/videos/satya-check.mp4';
import fleethq from '/videos/fleethq.mp4';
import rebatr from '/videos/rebatr-short.mp4';
import lazycommitVideo from '/videos/lazycommit-video.mp4';
import gocache from '/videos/gocache.mp4';
import quotick from '/videos/quotick.mp4'
import doable from '/videos/doable.mp4';
import stage from '/videos/stage.mp4';
import readmelingo from '/videos/readmelingo.mp4';
import foliox from '/videos/foliox.mp4';
import mercurius from '/videos/mercurius.mp4';
import oneurl from '/videos/oneurl.mp4';
import bettershot from '/videos/bettershot.mp4';
import linkpreview from '/videos/linkpreview.mp4';

interface MasonryProjectCardProps {
  project: Project;
  className?: string;
}

const getVideoSource = (videoId: string) => {
  switch (videoId) {
    case 'donezo':
      return donezovideo;
    case 'mind-mentor':
      return mindMentorVideo;
    case 'satya-check':
      return satyaCheckVideo;
    case 'fleethq':
      return fleethq;
    case 'rebatr-short':
      return rebatr;
    case 'lazycommit-video':
      return lazycommitVideo;
    case 'gocache':
      return gocache;
    case 'quotick':
      return quotick;
    case 'doable':
      return doable;
    case 'stage':
      return stage;
    case 'readmelingo':
      return readmelingo;
    case 'foliox':
      return foliox;
    case 'mercurius':
      return mercurius;
    case 'oneurl':
      return oneurl;
    case 'bettershot':
      return bettershot;
    case 'linkpreview':
      return linkpreview;
    default:
      return null;
  }
};

export const MasonryProjectCard = ({ project, className = "" }: MasonryProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoSource = project.video ? getVideoSource(project.video) : null;

  return (
    <Link
      href={`/projects/${project.id}`}
      className={`group/item relative rounded-xl p-4 transition-colors duration-300 bg-neutral-50 dark:bg-white/[0.04] border border-neutral-200/50 dark:border-white/[0.08] block cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content Container */}
      <div className="relative z-10 flex flex-col rounded-lg overflow-hidden">
        {/* Media Container */}
        <div className="block">
          <div className="relative overflow-hidden w-full aspect-video rounded-lg">
            {videoSource && isHovered ? (
              <Video
                key={project.id}
                src={videoSource}
                poster={project.image}
                className="w-full h-full object-cover"
                playsInline
                autoPlay
                muted
                loop
                controls={false}
              />
            ) : project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} project cover`}
                width={1200}
                height={900}
                className="w-full h-full object-cover"
                style={{ color: 'transparent' }}
                sizes="(max-width: 640px) 384px, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 317px"
                quality={75}
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800" />
            )}
          </div>
        </div>

        {/* Project Info */}
        <div className="pt-3">
          {/* Title + Status */}
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-black dark:text-white text-base">
              {project.title}
            </h3>
            {project.status && (
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${project.status === 'building'
                ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400'
                : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400'
                }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'building'
                  ? 'bg-amber-500 animate-pulse'
                  : 'bg-emerald-500'
                  }`} />
                {project.status === 'building' ? 'Building' : 'Live'}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* View Project Link */}
          <span className="inline-flex items-center gap-1 text-sm font-medium text-black dark:text-white">
            View Project
            <span className="text-base">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
};
