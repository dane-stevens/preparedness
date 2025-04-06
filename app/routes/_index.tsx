
export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
  <div className='max-w-(--breakpoint-lg) mx-auto p-8'>
      <h1 className="text-4xl text-center my-8">Go to the Ant</h1>
      <blockquote className="max-w-(--breakpoint-md) mx-auto my-8 text-slate-400">Go the the ant, O sluggard; consider her ways, and be wise. Without having any chief, officer, or ruler, she prepares her bread in summer and gathers her food in harvest. <cite>- Proverbs 6:6-8 ESV</cite></blockquote>
      <h2 className="text-xl">Survival Priorities</h2>
      <P>
      Your priorities for survival are linear at a high-level, but become much more fluid as you get into the contextual details of your particular situation.
      </P>
      <P>
        The 4 main priorities of survival are:
      </P>
      <ol className="list-decimal ml-8">
        <li>
         Shelter</li>
        <li>
          Water
        </li>
        <li>
          Fire
        </li>
        <li>
          Food
        </li>
      </ol>

      <P>Within each of these four priorities are numerous different conditions that we need to try to handle based on likelyhood. Take shelter for example: the first objective is to have a shelter, this could be anything from a tarp strung up over you to your house. Ok so you have your shelter, check. Are you able to save your shelter from a fire, or flooding, or other people? How likely are each of these events to happen?</P>
      <P>Our goal at GoToTheAnt is to give you the tools to determine for your own context where you need to focus your attention. This should not be approached out of a spirit of fear, but out of a sound mind.</P>

    </div>
  )
}

function P({children}:{children:ReactNode}){
  return (<p className="my-4">{children}</p>)
}
