import { Link } from 'react-router-dom'
import { cellSlug, type TableGroup } from '../data/products'

export function SpecTable({ group, seriesSlug }: { group: TableGroup; seriesSlug: string }) {
  return (
    <div className="mb-10">
      <h3 className="mb-2 text-[26px]">{group.title}</h3>
      {group.intro && <p className="mb-3 text-[15px]">{group.intro}</p>}
      <div className="overflow-x-auto border border-neutral-300">
        <table className="min-w-[760px] w-full border-collapse text-left text-[13px]">
          <thead className="bg-navy text-white">
            <tr>
              {group.columns.map((column) => (
                <th key={column.key} className="px-3 py-2 font-semibold">
                  {column.label}
                </th>
              ))}
              <th className="px-3 py-2 font-semibold">Data Sheet</th>
            </tr>
          </thead>
          <tbody>
            {group.rows.map((row, index) => (
              <tr key={row.model} className={index % 2 ? 'bg-mist' : 'bg-white'}>
                {group.columns.map((column) => (
                  <td key={column.key} className="border-t border-neutral-200 px-3 py-2">
                    {column.key === 'model' ? (
                      <Link to={`/products/${seriesSlug}/${cellSlug(row.model)}`} className="font-bold text-plum underline">
                        {row.model}
                      </Link>
                    ) : (
                      row[column.key] || '—'
                    )}
                  </td>
                ))}
                <td className="border-t border-neutral-200 px-3 py-2">
                  {row.pdf ? (
                    <a href={row.pdf} target="_blank" rel="noreferrer" className="font-bold text-plum underline">
                      PDF
                    </a>
                  ) : (
                    'Request'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {group.notes && (
        <ul className="mt-3 list-disc pl-5 text-[14px] leading-6 text-ink">
          {group.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
