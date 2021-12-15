import React, { ReactElement } from 'react'
import useTrans from '../../common/useTrans'

interface Props {

}

export default function BottomFooter(props: Props): ReactElement {
  const trans = useTrans().footer
  return (
    <div className="bottom-footer">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="text common-text-medium">{trans.copyright}</div>
          <div className="text common-text-medium d-none d-sm-block">
            {trans.registered_with_MIT}
          </div>
        </div>
      </div>
    </div>
  )
}
