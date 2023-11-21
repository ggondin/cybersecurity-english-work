import React from 'react';
import TeamCard from '../../components/TeamCard/TeamCard';
import alunosData from '../../assets/students.json';
import styles from './Team.module.css'

export default function Team() {
  return (
    <div className={styles.background}>
      {alunosData.map((aluno) => (
        <TeamCard
          key={aluno.id} 
          id={aluno.id}
          course={aluno.course}
          name={aluno.name}
          description={aluno.description}
        />
      ))}
    </div>
  );
}
