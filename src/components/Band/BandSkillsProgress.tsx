import dataSkill from 'utils/dataSkill'
import SkillsProgress from './SkillsProgress'

type Props = {}

const BandSkillsProgress = (props: Props) => {
    return (
        <>
            {dataSkill.map((skill) => (
                <SkillsProgress
                    key={skill.key}
                    label={skill.label ?? 'Unknown Skill'}
                    value={skill.value}
                />
            ))}
        </>
    )
}
export default BandSkillsProgress
