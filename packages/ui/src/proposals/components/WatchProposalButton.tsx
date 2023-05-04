import React, { useState, useEffect, useContext, useCallback } from 'react'

import { PageContext } from '@/app/PageContext'
import { ButtonGhost } from '@/common/components/buttons'
import { WatchIcon } from '@/common/components/icons'
import { WatchingNotificationProps } from '@/app/components/WatchingNotification'

interface Props {
  proposalId: string
}

export const WatchProposalButton = ({ proposalId }: Props) => {
  const {setNotiArr} = useContext(PageContext)
  const [showNotification, setShowNotification] = useState<boolean>(false)
  const [watching, setWatching] = useState<boolean>(false)

  const toggleWatching = useCallback(
    (e) => {
      setShowNotification(true);
      e.stopPropagation()
      setWatching((prev) => !prev)
    },
    []
  )

  useEffect(() => {
    if(showNotification){
      if (watching) {
        var newNoti = {
          title: 'You are now watching this proposal',
          message: 'You will receive notifications about important updates related to this proposal',
        }
      } else {
        var newNoti = {
          title: 'You are no longer watching this proposa',
          message: 'You will no longer receive any notifications about changes related to this proposal',
        }
      }
      setNotiArr((prevList:Array<WatchingNotificationProps>) => [...prevList, newNoti]);
    }
  }, [watching])

  return (
    <ButtonGhost
      size="medium"
      onClick={(e) => {
        toggleWatching(e)
      }}
    >
      <WatchIcon />
      {watching ? 'Stop Watching' : 'Watch'}
    </ButtonGhost>
  )
}

export default WatchProposalButton
