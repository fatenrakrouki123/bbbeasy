<?php

declare(strict_types=1);

/*
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

namespace Actions\Labels;

use Test\Scenario;

/**
 * @internal
 *
 * @coversNothing
 */
final class IndexTest extends Scenario
{
    final protected const INDEX_LABEL_ROUTE = 'GET /labels';
    protected $group                        = 'Action Label Index';

    /**
     * @param mixed $f3
     *
     * @return array
     *
     * @throws \ReflectionException
     */
    public function testGetAll($f3)
    {
        $test = $this->newTest();
        $f3->mock(self::INDEX_LABEL_ROUTE);

        json_decode($f3->get('RESPONSE'));
        $test->expect(JSON_ERROR_NONE === json_last_error(), 'Get all labels');

        return $test->results();
    }
}
