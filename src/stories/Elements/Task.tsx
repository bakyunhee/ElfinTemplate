import React from "react";

interface TaskProps {
  task : {
    id?: string;
    title?: string;
    state: string;
    updatedAt?: Date
  };
  onArchiveTask : (id?:string | null) => void;
  onPinTask : (id?:string | null) => void;
}

export const Task = ({ task : { id, title, state, updatedAt}, onArchiveTask, onPinTask } : TaskProps) => (
  <div className={`list-item ${state}`}>
    <label className="Checkbox">
      <input
      type="checkbox"
      defaultChecked={state === 'TASK_ARCHIVED'}
      disabled={true}
      name="checked"
      />
      <span className="checkbox-custom" onClick={() => onArchiveTask(id)}></span>
    </label>
    <div className="title">
      <input type="text" value={title} readOnly={true} placeholder="input titlle"/>
    </div>

    <div className="actions" onClick={event => event.stopPropagation()}>
      {state !== 'TASK_ARCHIVED' && (
        <a onClick={() => onPinTask(id)}>
          <span className={`icon-star`}></span>
        </a>
      )}
    </div>
  </div>

);

