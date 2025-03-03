"use client"

import styles from "./styles.module.css"
import {ErrorIcon, RefreshIcon} from "../../shared/assets/icons";
import {useMatches} from "@/app/shared/hooks/useMatches";
import {Select} from "@/app/shared/components/select";

type HeaderProps = {
  selectedStatus: string
  onStatusChange: (selectedStatus: string) => void
}
export const Header = ({ selectedStatus, onStatusChange }: HeaderProps) => {
  const { error, refetch } = useMatches();
  return (
    <div className={styles.container}>
      <div className={styles.sortContainer}>
        <div className={styles.header}>Match Tracker</div>
        <Select selected={selectedStatus} onChange={onStatusChange} />
      </div>
      <div className={styles.errorContainer}>
        {error && <div className={styles.error}>
          <ErrorIcon/>
          Ошибка: не удалось загрузить информацию
        </div>}
        <div className={styles.button} onClick={() => refetch()}>
          Обновить
          <RefreshIcon/>
        </div>
      </div>
    </div>
  )
}
