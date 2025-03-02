"use client"

import styles from "./styles.module.css"
import {ErrorIcon, RefreshIcon} from "../../../../public/icons";
import {useMatches} from "@/app/hooks/useMatches";
import {Select} from "@/app/shared/components/select";

type HeaderProps = {
  selectedStatus: string
  onStatusChange: (selectedStatus: string) => void
}
export const Header = ({ selectedStatus, onStatusChange }: HeaderProps) => {
  const { data: matches, error, isLoading, refetch } = useMatches();
  return (
    <div className={styles.container}>
      <div className={styles.sortContainer}>
        <div>Match tracker</div>
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
