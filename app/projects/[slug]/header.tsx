'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, GithubIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

import Link from 'next/link';
import { Project } from '@/types/project';

const animation = {
  hide: {
    x: -30,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1
  }
};

type HeaderProps = {
  metadata: Project;
};

const Header = (props: HeaderProps) => {
  const {
    metadata: { title, description, technologies, previewlink, githublink }
  } = props;

  return (
    <div className="space-y-8 pt-10">
      <motion.div
        className="flex items-center gap-3"
        initial={animation.hide}
        animate={animation.show}
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-3xl font-bold">
            <span>{title}</span>
            {technologies && (
              <div className="space-x-1">
                {technologies.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </div>
            )}
          </div>
          <div>{description}</div>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col items-start gap-2 sm:flex-row sm:gap-4"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        {previewlink && (
          <Link
            href={previewlink}
            target="_BLANK"
            className={cn(buttonVariants(), 'group')}
          >
            Visit Website
            <ArrowUpRightIcon className="ml-2 size-5" />
          </Link>
        )}
        {githublink && (
          <Button asChild variant={'outline'}>
            <Link href={githublink} target="_BLANK">
              View Source <ArrowUpRightIcon className="ml-2 size-5" />
            </Link>
          </Button>
        )}
      </motion.div>
    </div>
  );
};
export default Header;
