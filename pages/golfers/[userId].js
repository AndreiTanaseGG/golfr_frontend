import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ScoreCard from '../../components/ScoreCard'
import useUserScores from '../../lib/useUserScores'

const Golfer = () => {
  const router = useRouter()
  const { userId } = router.query
  const { data, error } = useUserScores(userId)
  let scores = null
  let name = null
  if (data) {
    (scores = data.scores), (name = data.name)
  }

  return (
    <Layout>
      <>
        {error ? (
          error
        ) : (
          <>
            <h1 className="text-xl">{`Scores of ${name}`}</h1>
            {scores &&
              scores.map( score => (
                <ScoreCard
                  key={score.id}
                  id={score.id}
                  totalScore={score.total_score}
                  playedAt={score.played_at}
                  userId={score.user_id}
                  userName={name}
                />
              ))}
          </>
        )}
      </>
    </Layout>
  )
}

export default Golfer
