import styled from "@emotion/styled";
import { List, ListItem, ListItemText, useMediaQuery } from "@material-ui/core";
import { useRouter } from 'next/router';
import React, { useState } from "react";

const ASIDES = [
    'Walwal',
    'Users',
    // 'Stores',
    'Products',
    'Pet-Information',
    // 'Playground',
    // 'Business-model',
    'Notices',
    'Freeboard',
];
export default function Aside() {
    const [selectedSideItem, setSelectedSideItem] = useState<string>(ASIDES[0]);
    const desktop = useMediaQuery('(min-width:1024px)');
    const router = useRouter();
    return (
        <ListBlock desktop={desktop ? 1 : 0}>
            {ASIDES.map(item => (
                <ListItem
                    key={item}
                    button
                    onClick={() => {
                        setSelectedSideItem(item);
                        if (item === 'Walwal') {
                            router.push('/walwal');
                            return;
                        }
                        router.push(`/walwal/${item.toLowerCase()}`);
                    }}
                    selected={item === selectedSideItem}
                >
                    {/* <ListItemIcon>{index + 1}</ListItemIcon> */}
                    <ListItemText primary={item} />
                </ListItem>
            ))}
        </ListBlock>
    )
};

const ListBlock = styled(List) <{ desktop: number; }>`
    width: 240px;
    border-right: ${({ desktop }) => desktop ? '1px solid rgba(0, 0, 0, 0.12)' : 'none'};
    display: flex;
    height: ${({ desktop }) => desktop ? '100%' : 'auto'};
    flex-direction: ${({ desktop }) => desktop ? 'column' : 'row'};
    /* position: fixed; */
`;

