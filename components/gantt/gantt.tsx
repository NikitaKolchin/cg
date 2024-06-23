'use client';
import React from 'react';
import { Chart } from 'react-google-charts';

const GanttChart: React.FC = () => {
    const data = [
        [
            { type: 'string', label: 'Task ID' },
            { type: 'string', label: 'Task Name' },
            { type: 'string', label: 'Resource' },
            { type: 'date', label: 'Start Date' },
            { type: 'date', label: 'End Date' },
            { type: 'number', label: 'Duration' },
            { type: 'number', label: 'Percent Complete' },
            { type: 'string', label: 'Dependencies' },
        ],
        [
            'Research',
            'Find sources',
            null,
            new Date(2024, 5, 1),
            new Date(2024, 5, 5),
            null,
            100,
            null,
        ],
        [
            'Write',
            'Write paper',
            'write',
            new Date(2024, 5, 6),
            new Date(2024, 5, 9),
            null,
            25,
            'Research',
        ],
        [
            'Cite',
            'Create bibliography',
            'write',
            new Date(2024, 5, 10),
            new Date(2024, 5, 10),
            null,
            20,
            'Research',
        ],
        [
            'Complete',
            'Hand in paper',
            'complete',
            new Date(2024, 5, 11),
            new Date(2024, 5, 11),
            null,
            0,
            'Cite,Write',
        ],
        [
            'Outline',
            'Outline paper',
            'write',
            new Date(2024, 4, 28),
            new Date(2024, 4, 30),
            null,
            100,
            null,
        ],
    ];

    const options = {
        height: 400,
        gantt: {
            trackHeight: 30,
        },
    };

    return (
        <Chart
            chartType="Gantt"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
};

export default GanttChart;
