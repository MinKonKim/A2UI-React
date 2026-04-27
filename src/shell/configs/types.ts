/**
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Configuration interface for the Universal App Shell.
 */
export interface AppConfig {
  /** Unique key for the app (e.g. 'restaurant') */
  key: string;
  title: string;
  background?: string;
  heroImage?: string;
  heroImageDark?: string;
  placeholder: string;
  loadingText?: string | string[];
  serverUrl?: string;
}
