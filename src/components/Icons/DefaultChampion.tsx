import * as React from 'react'

function DefaultChampion(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{'F2BD8973-C0CD-4023-A7EE-F7CB0750A347'}</title>
      <defs>
        <circle id="prefix__a" cx={17} cy={17} r={17} />
        <path id="prefix__c" d="M16.557 22.844H0V0h16.557z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="prefix__b" fill="#fff">
          <use xlinkHref="#prefix__a" />
        </mask>
        <use fill="#D7D7D7" xlinkHref="#prefix__a" />
        <g mask="url(#prefix__b)">
          <g transform="translate(9 6)">
            <mask id="prefix__d" fill="#fff">
              <use xlinkHref="#prefix__c" />
            </mask>
            <path
              d="M15.823 13.622c-2.62-.104.524-6.496-.944-9.745C13.412.629 8.28 0 8.28 0S3.143.629 1.676 3.877C.21 7.126 3.354 13.518.733 13.622c-2.62.105 2.304 7.754 6.496 9.222v-4.507s-.84.211-1.469-2.724c-.482-2.255-.73-5.135-.73-5.135s-1.258-.837-1.152-3.039c.103-2.199 3.351.63 3.351 2.516v4.786h2.098V9.955c0-1.886 3.248-4.715 3.351-2.516.106 2.202-1.15 3.039-1.15 3.039s-.25 2.88-.732 5.135c-.628 2.935-1.469 2.724-1.469 2.724v4.507c4.191-1.468 9.116-9.117 6.496-9.222"
              fill="#999"
              mask="url(#prefix__d)"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default DefaultChampion
