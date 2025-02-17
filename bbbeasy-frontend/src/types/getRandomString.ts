/**
 * BBBEasy open source platform - https://riadvice.tn/
 *
 * Copyright (c) 2022-2023 RIADVICE SUARL and by respective authors (see below).
 *
 * This program is free software; you can redistribute it and/or modify it under the
 * terms of the GNU Lesser General Public License as published by the Free Software
 * Foundation; either version 3.0 of the License, or (at your option) any later
 * version.
 *
 * BBBEasy is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
 * PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License along
 * with BBBEasy; if not, see <http://www.gnu.org/licenses/>.
 */

const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';

export const getRandomString = () => {
    let result = '';
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(
                Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32) * characters.length)
            );
        }
        if (j != 1) {
            result += '-';
        }
    }
    return result;
};
