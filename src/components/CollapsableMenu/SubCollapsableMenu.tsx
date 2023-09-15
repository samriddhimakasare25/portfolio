'use client';
import { useState, useCallback, useRef } from 'react';
import { ChevronDown, ChevronRight } from '@/icons';
import { SubMenu, useDispatch, explorerSlice } from '@/lib/redux';

export default function SubCollapsableMenu({ subMenuTitle, subMenuButtons, children, subMenu, open, maxHeight, height, overflowY }: SubCollapsableMenuProps) {
  const [focused, setFocused] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>();

  const dispatch = useDispatch();

  const handleFocusIn: React.FocusEventHandler = useCallback((e: React.FocusEvent<HTMLButtonElement | HTMLDivElement>) => {
    setFocused(true);
  }, []);

  const handleFocusBlur: React.FocusEventHandler = useCallback((e: React.FocusEvent<HTMLButtonElement | HTMLDivElement>) => {
    setFocused(false);
  }, []);

  const handleMouseIn: React.MouseEventHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setHovered(true);
  }, []);

  const handleMouseOut: React.MouseEventHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setHovered(false);
  }, []);

  const handleToggleMenu: React.MouseEventHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(explorerSlice.actions.toggleMenu({ subMenu }));
    },
    [dispatch, subMenu]
  );

  const handleTransitionEnd: React.TransitionEventHandler = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (!contentRef.current) return;
      if (open && e.propertyName === 'max-height') {
        dispatch(explorerSlice.actions.overFlowYAuto({ subMenu }));
        contentRef.current.style.overflowY = 'auto';
      }
    },
    [open, dispatch, subMenu]
  );

  return (
    <div onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut} className="bg-dark_bg">
      <div className="relative">
        <button onFocus={handleFocusIn} onBlur={handleFocusBlur} onClick={handleToggleMenu} className="flex w-full focus:ring-[.5px] active:ring-0 ring-gray-500 ring-opacity-20 py-1 justify-between">
          <div className="flex">
            {open ? <ChevronDown /> : <ChevronRight />}
            <span className="text-xs font-extrabold text-gray-500 ml-1">{subMenuTitle}</span>
          </div>
        </button>
        {open && (hovered || focused) && (
          <div className="flex absolute right-0 top-0 bottom-0 mx-1 my-[1px]">
            {subMenuButtons.map((button, index) => (
              <button key={index} className="hover:bg-gray-300 p-[2px] rounded-md">
                {button.button}
              </button>
            ))}
          </div>
        )}
      </div>
      <div tabIndex={-1} onFocus={handleFocusIn} onBlur={handleFocusBlur} className="focus:ring-[.5px] active:ring-0 ring-gray-500 ring-opacity-20 select-none">
        <div
          id={'subMenu-' + subMenu}
          ref={(ref) => (contentRef.current = ref)}
          onTransitionEnd={handleTransitionEnd}
          className="transition-all content"
          style={{ maxHeight: maxHeight, overflowY: overflowY, height: height ? height : 'auto' }}
        >
          {children}
          <div className="cover-bar"></div>
        </div>
      </div>
    </div>
  );
}

/* Types */
interface SubCollapsableMenuProps {
  subMenuTitle: string;
  subMenuButtons: SubCollapsableMenuButtonProps[];
  children: React.ReactNode;
  subMenu: SubMenu;
  open: boolean;
  maxHeight: string;
  overflowY: 'auto' | 'hidden';
  height?: string;
}

interface SubCollapsableMenuButtonProps {
  id: number;
  button: React.ReactNode;
}
